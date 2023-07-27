class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
/*constructor(message, statusCode) {  //THE FORMER BEFORE BADREQUEST & UNAUTHENTICATED
    super(message)
    this.statusCode = statusCode
  }*/
}

module.exports = CustomAPIError
