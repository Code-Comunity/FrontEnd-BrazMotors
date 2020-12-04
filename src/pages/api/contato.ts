import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {

    const { email } = request.body;
  console.log(email)
  return response.json({ message: `Hello ${email}` })
}