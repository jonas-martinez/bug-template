'use strict'

module.exports = (data, props) => {
  return page(data.value);
}

function page(page) {
  switch (page) {
    case "first":
      return firstPage();
    case "second":
      return secondPage();
  }
}

function firstPage() {
  return {
    type: "flex",
    children: [
      {
        type: "container",
        child: {
          type: "flex",
          children: [
            {
              type: "flex",
              children: [
                {
                  type: "button",
                  text: "test1",
                },
                {
                  type: "button",
                  text: "test2",
                },
                {
                  type: "button",
                  text: "test3",
                },
              ]
            },
            {
              type: "button",
              text: "test4",
              onPressed: {
                action: 'changeValue',
                props: {
                  value: "second"
                }
              }
            }
          ]
        }
      },
      {
        type: "flex",
        children: [{ type: "text", value: "No categories." }]
      }
    ]
  };
}

function secondPage() {
  return {
    type: "flex",
    children: [
      {
        type: "container",
        child: {
          type: "flex",
          children: [
            {
              type: "flex",
              children: [
                {
                  type: "button",
                  text: "test1",
                },
                {
                  type: "button",
                  text: "test2",
                },
                {
                  type: "button",
                  text: "test3",
                },
                {
                  type: "button",
                  text: "test4",
                },
                {
                  type: "button",
                  text: "test5",
                },
              ]
            },
            {
              type: "button",
              text: "test6"
            }
          ]
        }
      },
      {
        type: "flex",
        children: [
          {
            type: "flex",
            children: [
              {
                type: "button",
                text: "test7"
              }
            ]
          },

        ]
      },
    ]
  };
}

