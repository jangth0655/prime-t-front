import axios from "axios";
type LoginResponse = {
  access_token: string;
};

const loginAPI = async (
  login_id: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      "api/v1/login",
      {
        login_id: login_id,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default loginAPI;
