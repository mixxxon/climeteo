# climeteo
CLImeteo is simple CLI Node.js weather application

By using CLImeteo app you can check the weather from your terminal / command line. The weather will be provided for your location by checking your public IP Address.

<br />

### How to use it?

Download source code and install modules. Then, run the command: <br /><br />
`
node app.js
`
<br />

you should get the output: <br />

<pre>
Today's weather for (Your City), (Your Country)
Date: 17.02.2022 
<br />
Weather: Clear
Highest temp. today: 40°C 
Lowest temp. today: 24°C 
<br />
Executed in: 2.299s 
</pre>

<br />

You can run the app with the option `-f` or `--forecast` to get five days weather forecast for your location.

The application also supports the following arguments: <br /><br />
`-h` or `--help` for application help, and <br />
`-v` or `--version` to get the info about application version <br />

<br />

### Dependencies

Climeteo app depends on two modules:
  - [my-public-ip](https://www.npmjs.com/package/my-public-ip)
  - [postman-request](https://www.npmjs.com/package/postman-request)

<br />

### License

Copyright © 2022  [Milan M. Dimitrijevic](https://github.com/mixxxon/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
