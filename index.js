const core = require('@actions/core');

try {
    // `who-to-greet` input defined in action metadata file
    const token = core.getInput('token');

    console.log(`Checking ${token}`);

    function verifyToken(input, regexPattern) {
        const regex = new RegExp(regexPattern);

        return regex.test(input);
    }

    const pattern = "^[A-Za-z0-9_-]+\\.[A-Za-z0-9_-]+\\.[A-Za-z0-9_-]+$";
    const result = verifyToken(token, pattern);

    if (!result) {
        throw new Error("Given JWT is not valid.");
    }
} catch (error) {
    core.setFailed(error.message);
}
