const { DynamoDBClient  }=  require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient ({
    region: "us-west-1",
    accessKeyId: "access_key_id",
    secretAccessKeyId: "secret_access_key_id",
    endpoints: "http://localhost:8080"
});

module.exports = client;
