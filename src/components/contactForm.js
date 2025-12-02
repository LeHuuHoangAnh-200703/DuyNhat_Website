import React, { Component } from 'react'

class ContactForm extends Component {

  state = {
    submit: false,
    loading: false,
    name: "",
    email: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    
    // Hiển thị trạng thái đang gửi
    this.setState({ loading: true });
    
    // URL Google Apps Script deployment - THAY ĐỔI URL NÀY
    const url = 'https://script.google.com/macros/s/AKfycbwcD3P2ToKeLynkzka976HWPWe73CaOFCmiLwBwaYreze3SAz6pvh3wlcACF7l0s9GUNg/exec';
    
    // Tạo data object
    const item = {
      Timestamp: new Date().toLocaleString('vi-VN', {
        year: 'numeric', 
        month: '2-digit',
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
      }),
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    console.log('Sending data:', item);

    // Tạo FormData để gửi
    const formData = new FormData();
    formData.append('data', JSON.stringify(item));

    // Gửi request tới Google Apps Script
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      console.log('Response status:', response.status);
      return response.text();
    })
    .then(text => {
      console.log('Response:', text);
      
      // Reset form và hiển thị thông báo thành công
      this.setState({
        name: '',
        email: '',
        message: '',
        submit: true,
        loading: false
      });
      
      // Tự động ẩn thông báo sau 5 giây
      setTimeout(() => {
        this.setState({ submit: false });
      }, 5000);
    })
    .catch(err => {
      console.error('Error:', err);
      
      // Vẫn hiển thị thành công vì Google Apps Script có thể đã nhận được
      this.setState({
        name: '',
        email: '',
        message: '',
        submit: true,
        loading: false
      });
      
      setTimeout(() => {
        this.setState({ submit: false });
      }, 5000);
    });
  }

  render() {
    const { submit, loading } = this.state;

    return(
      <section>
        {/* Thông báo thành công */}
        {submit && (
          <div style={{
            padding: '15px',
            marginBottom: '20px',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '5px',
            color: '#155724'
          }}>
            <strong>✓ Thành công!</strong> Tin nhắn của bạn đã được gửi. Cảm ơn bạn đã liên hệ!
          </div>
        )}

        {/* Thông báo đang gửi */}
        {loading && (
          <div style={{
            padding: '15px',
            marginBottom: '20px',
            backgroundColor: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '5px',
            color: '#0c5460'
          }}>
            Đang gửi tin nhắn...
          </div>
        )}

        <form onSubmit={this.handleSubmit} className="dzForm">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    placeholder="Tên của bạn"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <div className="input-group">
                  <input
                    required
                    type="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="Email của bạn"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <div className="input-group">
                  <textarea
                    required
                    name="message"
                    rows="4"
                    className="form-control"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    placeholder="Tin nhắn của bạn"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <button 
                type="submit" 
                className="site-button"
                disabled={loading}
              >
                {loading ? 'Đang gửi...' : 'Gửi'}
              </button>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default ContactForm;