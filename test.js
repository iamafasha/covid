fetch(
  "https://api.twitter.com/1.1/search/tweets.json?q=From:afashaisakiye&count=5",{
    method: "GET",
    headers: {
      "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAAMaxDQEAAAAAtL1HUMXNx3HGi48wbDEd2rYl2y0%3DfKV71wYF1Z1CcxhJWLmvoz4SX19hqTgGu1hu7j4OHUoHKzg3ld",
      "Cookie":'personalization_id="v1_oXyIi8pNTbq4MBPMYl4eeA=="; guest_id=v1%3A157488873863372147'
  },
      redirect: "follow",
  }).then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
