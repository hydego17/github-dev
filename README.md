# Github Dev

[**DEMO**](https://github-dev.vercel.app/)

This project was built using:

- [**Next.js**](https://nextjs.org/) (React)
- [**SWR**](https://swr.vercel.app/) and [**Axios**](https://github.com/axios/axios) for data fetching
- [**Chakra-UI**](https://chakra-ui.com/) (CSS Framework) and [**Emotion**](https://emotion.sh/) (CSS in JS) for styling

The request to Github API is made using access token, and is limited to 5,000 request per hour. [Learn More](https://docs.github.com/en/free-pro-team@latest/developers/apps/rate-limits-for-github-apps#user-to-server-requests)

## Installation

### Clone this repository

```sh
git clone https://github.com/hydego17/github-dev.git <your_folder_name>
```

### Install all the dependencies (Next, React and React-DOM are essentials)

```sh
npm install

# or

yarn
```

### Make sure you have the access token for Github API

To get started, go to to your **Github** > **Settings** > **Developer Settings** > **Perconal Access Tokens** and generate a new one.

Then make a new file called **`.env.local`** and register the token:

```
ACCESS_TOKEN=<yourtokenhere>
```

Make sure that the token is registered in `/pages/api/users/index.js` and `/pages/api/users/[user].js`.

The token is used in both api pages as the authentication headers for the API call.

For example, in `/pages/api/users/index.js`:

```js
const response = await axios.get(
  `https://api.github.com/users?since=${random}`,
  {
    headers: {
      Authorization: `token ${process.env.ACCESS_TOKEN}`,
    },
  }
);
```

### Run this App:

```sh
npm run dev

# or

yarn dev
```

Go to http://localhost:3000/.
