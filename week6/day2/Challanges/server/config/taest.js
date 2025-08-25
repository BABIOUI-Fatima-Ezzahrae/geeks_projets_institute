import bcrypt from 'bcrypt';

const password = '12345678';
const hashedPassword = '$2b$10$goOxtdylSbigUUbFzvuOzuFw34ZpnR6GbtlvpQiJAimtanz2Djcoe';

bcrypt.compare(password, hashedPassword).then(result => {
  console.log("Compare result:", result);
}).catch(console.error);
