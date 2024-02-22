import {
  buildLogger,
  logger as wistonLogger,
} from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin", () => {
  test("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger, should return a function logger", () => {
    const winstonLoggerMock = jest.spyOn(wistonLogger, "log");
    const message = "test mesage";
    const service = "test service";

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });

  test("logger.error should log a message", () => {
    const winstonLoggerMock = jest.spyOn(wistonLogger, "error");
    const message = "test error message";
    const service = "test error service";

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message,
        service,
      })
    );
  });
});
