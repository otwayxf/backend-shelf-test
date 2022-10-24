// 使用
export function login() {
  return window.$http({
    url: "/login",
    method: "get",
    params: { username: "18342912040", password: "123456" }
  });
}
