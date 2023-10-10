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
ROOT    := $(shell pwd)
SRC     := $(dir $(lastword $(MAKEFILE_LIST)))

-include tasks/Makefile.*

build:
	make docker/build

up:
	make docker/up

dev:
	make docker/build-dev && make docker/up-dev

dev/build:
	make docker/build-dev

dev/up:
	make docker/up-dev

test:
	make docker/build-test && make docker/up-test

test/build:
	make docker/build-test

test/up:
	make docker/up-test

down:
	make docker/down
