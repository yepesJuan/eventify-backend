import { ServiceAccount } from "firebase-admin";

// jwt / google auth
export const firebaseConfig = {
  type: "service_account",
  project_id: "eventify-ui",
  private_key_id: "8351a82efd71568f594e12ce2d0f3ce687a58ad1",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDHGobUWrVVB1VV\nIx0+osS39zTpllqBPru4db6swGcYhdQVumWARrO7pG2B0Gf20MdaPDB1uZhWp54j\nqTeG3nncUc/+tssNVh1j3KSs0hTdOW0CAOCwk52KKnF2OLlvlHp0S6ke2dbUFTet\nCTMu7BRPuGPiqGkpm7K4Nr60DJjaHsHQQybT8/Z0Y500EVDfUHlNzEzyLFe+FbXB\nIxuHEj23cQPtAUbybGC43A2NNltwgjQ1pmOgLyHq61m+NPB4KlQ9VSzZjSqA+q4p\nrIYcx70OQQBFP/fehqGLih9qJk4gEqOBLyOWGbHnNlDlBdETEqEZiGtwRm0CJjEC\nXIiDfGSDAgMBAAECggEAHXHS1rzDbFu1Ru32eTjhFsO8U38ky1BXuqPPGwUpOfsw\nrjXupNXP5sQeXcBQX7Poh3O3RvG3kbkgLe3shEmKhAalV+n4hXRizE3pHJXE+CJx\n+IXgtLxf4/r65Jzm75VptqEp1aIpnxu0LCbcJuhK6K9ANljplHmuKIgQE9h5EmiP\nFrpqP/xxbX4yKNzYIk+e7TNzGkRrdM5yNcLFY0/QD/kyBPb4qPUHtPJ/r6mFmXOQ\nfKVOTlCHJLkTNXMjUtY2+J9nyNM8JGeJeFsyJu5ko1gcz7kgCvA74Zz+CDeTug7L\nSgBbAv5BtzH40Z8FcZsE8xaVbETd9pMn8KDjAxYQgQKBgQDyesQlwTNqAKxf/Z4Z\nlqMqxLCtPBp3/tEPlbihZ5fx5HYj56JE+qO/rQmJIw3L7aFZAx63G88a2o1dPbfI\nukfMMFgaa9FGBU9wjx0djgUNmf0lwdkjMqsz4uw32OnS5U4RtRpMQV/RWqW2oqWt\nuFT0MtGKM5xU24pKg1QBswSv8QKBgQDSNJkTLq3qienAP6sUptJAx2GPFAJMHaw3\nVTqjYPOaisj0JNRzwmI7kONnua8hcl2VJKRVd9VD4z8+JvAWJqc2MxEisXvyOkcH\n7yvr72ttKcJRRdwc7+QfiA1hCaO0+qzDAtHUY80WZPPqx0rtIyeUOmegLy+VDHuc\nBAew3YpPswKBgQDG0TKTYl6tw++SpXlEsecH4k6bPHTXfvAcPz8r2K0VgaX8uqiq\ntngdadwvvbZKR4XMXmqI6RxfgGP41+ohg9vq6JjU0SK+rwv71tygpxotlN2kX9WS\nrrEB0katZAYVDj989WmirNfL6O+HWMVQM5w0vpZhIwBD897oSdZPrmFhgQKBgQDM\nxnio+zxp01hn9J5RTAJfINylabSjOfTfIqQxLO2ji7ggPxDIhID1zjv6fCVjy+nm\ntP9yU37q16JwhbY1ngoe/riet5ArdSJlVFXRTje07I1kZ0360qfFH+EIuz9Du0A5\n6bFH2sGcI1SLTwJq6WhROmRg5BbSeIqifjqPzgJDiQKBgQCFoVBbCB4/hqGDHasB\nvFyVN4oHCq/QuAlfLyCf0qbvLlq8NKghuiqOuEAgIBrA/9hv8VsbTVeNbV8GHrBG\nzN5I5mVFzguhbWMb2AH5ywNCRvK5zdVR11NvQEL7Z5K6RRPrJIL2ACT2ZiFKxvMi\nQqmITKSi6h8pj14Y58A9OtGiwQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ueczu@eventify-ui.iam.gserviceaccount.com",
  client_id: "115601966100112138668",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ueczu%40eventify-ui.iam.gserviceaccount.com",
} as ServiceAccount;
