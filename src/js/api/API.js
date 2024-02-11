class API {
  constructor() {
    this.baseUrl = "https://ajax.test-danit.com/api/v2/cards";
    this.token = null;
  }

  async getData() {
    const res = await fetch(`${this.baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    const data = await res.json();
    return data;
  }
  async login(formData) {
    const res = await fetch(`${this.baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.text();
    if (!res.ok) {
      Notiflix.Notify.failure("Error login");
      return data;
    }
    this.token = data;
    localStorage.setItem("token", this.token);
    Notiflix.Notify.success("Successeful login");
    return this.token;
  }
  getToket() {
    const token = localStorage.getItem("token");

    if (token) {
      this.token = token;
    }
    return this.token;
  }
  async createCard(formData) {
    const response = await fetch(`${this.baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },

      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      return false;
    }
    Notiflix.Notify.success("Successefull added card");
    return data;
  }

  async deleteData(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (!response.ok) {
      return false;
    }
    return id;
  }

  async updateData(formData, id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response) {
      return false;
    }
    return data;
  }

  async getById() {}
}
const api = new API();
export default api;

///// 7825e206-fd77-4b82-bb9e-5c0d1ae46206
