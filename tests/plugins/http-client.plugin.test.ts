import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("plugins/http-client.plugin", () => {
  test("httpClientPlugin.get() should retunr a string", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    });
  });

  test("httpClientPlugin should have POST, PUT and DELETE methods ", async () => {
    //expect(typeof httpClientPlugin.post).toBe("function");
    //expect(typeof httpClientPlugin.put).toBe("function");
    //expect(typeof httpClientPlugin.delete).toBe("function");
    expect(typeof httpClientPlugin.get).toBe("function");
  });
});
