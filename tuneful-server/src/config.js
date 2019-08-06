module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgres://qwhttqbtbmurij:cdb9a241439bdeabeca10ae828d62c12b0cfbbc408025d6b0ea8f2fc33d22466@ec2-23-21-109-177.compute-1.amazonaws.com:5432/d2trf0uete5f6q',
    JWT_SECRET: process.env.JWT_SECRET || 'tuneful-jwt-made-this-secret',
  }

