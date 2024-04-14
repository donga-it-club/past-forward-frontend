type FunctionType<T> = (input: T) => T | Promise<T>;
type ErrorHandlerType<E> = (error: E) => Promise<never>;

const processFunction = async <T, E>(func: FunctionType<T> | ErrorHandlerType<E>, input: T | E): Promise<T | E> => {
  try {
    return await func(input as T & E);
  } catch (error) {
    return error as E;
  }
};

export function flow<T, E>(functions: FunctionType<T>[] | ErrorHandlerType<E>[]) {
  return async (initialInput: T): Promise<T> => {
    let result: T | E = initialInput;

    for (const func of functions) {
      result = await processFunction(func, result);
    }

    if (result instanceof Error) {
      throw result;
    }

    return result as T;
  };
}
