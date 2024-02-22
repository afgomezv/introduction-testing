import { getAge } from "../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin", () => {
  test("getAge() should return the age of a person ", () => {
    const birthdate = "1984-08-04";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge should return current age", () => {
    const birthdate = "1984-08-04";
    const age = getAge(birthdate);

    const calculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculateAge);
  });

  test("getAge sholud retunr 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthdate = "1995-08-04";
    const age = getAge(birthdate);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledWith();
  });
});
