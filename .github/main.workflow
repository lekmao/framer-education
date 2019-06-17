workflow "Build and Publish" {
  on = "push"
  resolves = "Publish"
}

action "Publish Filter" {
  needs = ["Build"]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build" {
  needs = ["Only Learn"]
  uses = "framer/bridge@master"
  args = ["build", "Learn/learn.framerfx"]
}

action "Publish" {
  uses = "framer/bridge@master"
  args = ["publish", "Learn/learn.framerfx", "--yes", "--public"]
  needs = ["Build", "Publish Filter"]
  secrets = ["FRAMER_TOKEN"]
}

action "Only Learn" {
  uses = "wcchristian/gh-pattern-filter-action@master"
  args = ".*learn\.framerfx.*"
}
