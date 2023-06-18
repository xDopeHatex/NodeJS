const PREFIX = "--";

const parseArgs = () => {
  const arr = process.argv.slice(2).reduce((acc, v, i, array) => {
    if (v.startsWith(PREFIX)) {
      const formPropName = `${v.replace(PREFIX, "")} is ${array[i + 1]}`;
      return [...acc, formPropName];
    }
    return acc;
  }, []);

  const stringFinal = arr.join(", ");

  console.log(stringFinal);
};

parseArgs();
