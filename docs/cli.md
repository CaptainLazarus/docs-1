---
id: cli
title: Command Line Options
sidebar_label: CLI
---

[View Repo](https://github.com/A11yWatch/a11ywatch/tree/main/cli)

The a11ywatch cli is an easy way to get started with running and deploying.

## Getting Started

Make sure to have [`RUST`](https://www.rust-lang.org/tools/install) installed in order to get the cli. If you need to deploy to a remote cloud service like Google
you need to have [`terraform`](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed as well.

1. `cargo install a11ywatch_cli`

## Commands

You can run the `a11ywatch -h` command to get all the options and details for the CLI. The deployment commands `deploy` and `terminate` via Terraform are in `Beta`.

```sh
a11ywatch_cli 0.2.21
A11yWatch accessibility CLI.

USAGE:
    a11ywatch [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -f, --find-results               Log file results path
        --find-tmp-dir               Get the apps tmp directory location
    -g, --github-api-url             Get github API endpoint of project
        --github-results-path        Log file results github path
    -h, --help                       Print help information
    -r, --results-parsed             Get results file parsed to json
        --results-issues             Get the total amount of issues between errors,warning,notice
                                     that occured for the result set
        --results-issues-errors      Get the total amount of issues of type error from result set
        --results-issues-warnings    Get the total amount of issues of type warning from result set
        --results-parsed-github      Get results of the github html message
    -s, --set-token <SET_TOKEN>      Set the API token to use for request
    -V, --version                    Print version information

SUBCOMMANDS:
    build        Build the project on the local machine [defaults to docker runtime]
    crawl        Site wide scan a website url for issues
    deploy       Deploy the build on remote infrastructure
    extract      Extract results in formats for platforms
    help         Print this message or the help of the given subcommand(s)
    scan         Single page scan a website url for issues
    start        Start the application on the local machine [defaults to docker runtime]
    stop         Stop the project on the local machine [defaults to docker runtime]
    terminate    Destroy the build on remote infrastructure [defaults: GCP]
```

### Quick Start

To get started scanning your website with the cli run the following commands.
At the moment you can only crawl a single page, use the front-end client if you need continuous delivery through web sockets.

```sh
a11ywatch start # or start with frontend included passing -f option
a11ywatch scan --url https://www.a11ywatch.com -s
```

## Deploying Remotely [Beta]

In order to deploy using terraform to a third party you need to clone the A11yWatch [repo](https://github.com/A11yWatch/terraform-provider) first and navigate into the directory before running any of the deploy commands.
You can deploy the project with terraform with a couple steps onto any infrastructure. If you are running the remote commands make sure to configure the terraform variables to match your project id and log in to gcloud via command line (`gcloud login`). Make sure to clone the repo and cd into the root. You can also install the CLI onto a machine and start up locally as well via docker or a simple bash script. Terraform provides a more balanced remote setup since the architecture is set to scale amongst different layers while the standard `build` + `start` commands use a single docker instance.
