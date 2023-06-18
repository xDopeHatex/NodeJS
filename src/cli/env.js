const parseEnv = () => {
  const PREFIX = "RSS_";
  const rssVars = Object.entries(process.env)
    .reduce(
      (acc, [k, v]) => (k.startsWith(PREFIX) ? [...acc, `${k}=${v}`] : acc),
      []
    )
    .join("; ");

  console.log(rssVars);
};

parseEnv();
