import api from '../services/api';


describe("Login", () =>{

  beforeAll(async () =>{
   
  })
  
  it("Should be able to login", async () =>{
    
    const loginData = {
      usuario: "teste99",
      senha: "123"
    }

    const response = await api.post("/login", loginData);
    expect(response.status).toBe(200);
    

  });

})
