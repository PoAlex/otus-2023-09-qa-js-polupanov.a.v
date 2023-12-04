/** API роуты */

const baseURL = process.env.BASE_API_URL

export const APIroutes = {
  CreateAccount: `${baseURL}/register`,
  Login: `${baseURL}/login`,
  DeleteCurentUser: `${baseURL}/user/deletion/request`,
  ConfirmDeleteCurentUser: `${baseURL}/user/deletion/confirm`,
  GetUserInfo: `${baseURL}/user`
}