// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_req, res) => {
  return res.end(process.env.API_KEY);

};
