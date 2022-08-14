const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/storefront/.env') });

const { exec } = require('child_process');
exec(
  `contentful login --management-token ${process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN}`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout);
    console.log(stderr);
  },
);
