const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
});

const params = {
    Bucket: 'signed-url-poc',
    Key: 'SAAC01.PNG',
    Expires: 60 * 10,
    ContentType: 'image/png',
}

module.exports = {
    getUrl: async () => {
        let url = await  s3.getSignedUrl('putObject', params)
        console.log(url)
        return url
    }
}