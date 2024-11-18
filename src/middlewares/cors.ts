const whiteList: string[] = ["localhost", "127.0.0.1"];

const corsOption = {
  origin: whiteList,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 84600,
};

export default corsOption;
