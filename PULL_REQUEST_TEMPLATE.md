Please fill in this template.

- [ ] Prefer to make your PR against the `master` branch.
- [ ] Use a meaningful title for the pull request. Include the name of the package modified.
- [ ] Test the change in your own code.
- [ ] Follow the advice from the [readme](https://github.com/DefinitelyTyped/DefinitelyTyped#make-a-pull-request).
- [ ] Avoid [common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped#common-mistakes).
- [ ] Run `npm run lint -- package-name` if a `tslint.json` is present.

If adding a new definition:
- [ ] The package does not provide its own types, and you can not add them.
- [ ] If this is for an NPM package, match the name. If not, do not conflict with the name of an NPM package.
- [ ] Run `tsc` without errors.
- [ ] Include the required [files](https://github.com/DefinitelyTyped/DefinitelyTyped#create-a-new-package) and header. Base these on the README, *not* on an existing project.

If changing an existing definition:
- [ ] Provide a URL to documentation or source code which provides context for the suggested changes: <<url here>>
- [ ] Increase the version number in the header if appropriate.
