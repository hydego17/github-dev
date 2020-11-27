## Github Dev

This project was built using Next.js (React), SWR and Axios for data fetching, Chakra-UI and Emotion (styled).

The request to Github API is made using access token, and is limited to 5,000 request per hour. [Learn More](https://docs.github.com/en/free-pro-team@latest/developers/apps/rate-limits-for-github-apps#user-to-server-requests)

## Instalation

### Clone this repository

```
git clone https://github.com/hydego17/github-dev.git <your_folder_name>
```

### Install all the dependencies (Next, React and React-DOM are essentials)

```
npm install

# or

yarn
```

### Make sure you have the access token for github API

To get started, go to to your **Github** > **Settings** > **Developer Settings** > **Perconal Access Tokens** and generate a new one.

Then make a new folder called **.env.local** and register the token:

```
ACCESS_TOKEN=<yourtokenhere>
```

Make sure that the token is registered in `/page/api/users/index.js` and `/page/api/users/[user].js`.

The token is used for in both api pages as the authentication headers for github API request.

For example, in `/page/api/index.js`:

```
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

```
npm run dev

# or

yarn dev
```
