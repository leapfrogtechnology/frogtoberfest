<h1 align="center">Frogtoberfest Checker</h1>
<p align="center">Web app to track your progress for Frogtoberfest.</p>
<p align="center">:point_right: <a href="https://frogtoberfest.lftechnology.com">https://frogtoberfest.lftechnology.com</a></p>

## CI Status

[![frogtoberfest Actions Status](https://github.com/leapfrogtechnology/frogtoberfest/workflows/master/badge.svg)](https://github.com/leapfrogtechnology/frogtoberfest/actions)

## Requirements

- Node v12.x+

## Running the App

- [Generate a GitHub personal access token](https://github.com/settings/tokens/new?scopes=&description=Frogtoberfest) to ensure you don't get rate limited as often.

- Create a `.env` file using `.env.example`.

  ```bash
  $ cp .env.example .env
  ```

- Set your GitHub token as `REACT_APP_GITHUB_TOKEN` environment variable in `.env`:

- Install dependencies and start.

  ```bash
  $ yarn
  $ yarn start
  ```

### Running the app within Docker

As an alternative to the section above, you can run the app within a Docker container:

```bash
$ docker build -t frogtoberfest-checker .
$ docker run -p 5000:5000 -e "REACT_APP_GITHUB_TOKEN=YOUR_TOKEN" frogtoberfest-checker
```

Alternatively, you can use docker-compose.

```bash
$ docker-compose up --build
```

## License

Redistributed and sub-licensed under [MIT License](LICENSE) © 2019 - present by [Leapfrog Technology](https://github.com/leapfrogtechnology).

Originally distributed and licensed under [MIT License](https://github.com/jenkoian/hacktoberfest-checker/LICENSE) by [Ian Jenkins](https://github.com/jenkoian). Check the original source code [here](https://github.com/jenkoian/hacktoberfest-checker).

Happy Hacking! 🎃 🐸
