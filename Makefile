#
# Makefile for the Dark SDK for JavaScript
# @version 0.1.5 [2023-10-06]
# http://github.com/iods/js-dark
# Author: Rye Miller <rye@drkstr.dev>
# Copyright (c) 2023, Rye Miller
#
# @TODO:
#   - one thing
#   - two things
#   - three things

SHELL   := /bin/bash
PROJECT := js-dark
VERSION := 0.1.5


-include tasks/Makefile.*


.DEFAULT_GOAL := all


dev:
	make docker/build-dev && make docker/up-dev

dev/build:
	make docker/build-dev

build:
	make docker/build

test:
	make docker/build-test && make docker/up-test

test/build:
	make docker/build-test


stats:
	@docker stats $(docker ps --format='{{.Names}}')


help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  clean       removes all stopped containers."
	@echo "  dev         to both build and run a React development environment."
	@echo "  dev/build   builds a React development environment."
	@echo "  dev/up      to run a React development environment."
	@echo "  down        removes the currently running images and volumes."
	@echo "  test        to both build and run a vanilla javascript instance."
	@echo "  test/build  builds a vanilla javascript instance."
	@echo "  test/up     to run a vanilla javascript instance."
	@echo "  uninstall   removes all images, containers, and networks."


up:
	make docker/up

dev/up:
	make docker/up-dev

test/up:
	make docker/up-test

down:
	make docker/down

clean:
	make docker/remove

uninstall:
	make docker/prune
