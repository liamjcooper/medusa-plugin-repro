import { BaseService } from "medusa-interfaces";

class HelloService extends BaseService {
  getMessage() {
    return "Hello world!";
  }
}

export default HelloService;
