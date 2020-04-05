import routes from "../../utils/routes";
import axios from "axios";

export async function getHelloWorld() {
  try {
    const config = {
      headers: { Accept: "application/vnd.hmrc.1.0+json" }
    };
    const response = await axios.get(routes.helloWorldApi, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
