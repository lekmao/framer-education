import { Data, Override } from "framer";

const data = Data({
  likedItems: []
});

function Favorite(value, props) {
  if (value === true) {
    data.likedItems.push({
      key: props.id,
      text: props.children[0].props.text,
      message: props.children[0].props.message,
      component: "checkbox",
      value: true,
      paddingLeft: 25,
      onValueChange: value => Favorite(value, props)
    });
  }
  if (value === false) {
    data.likedItems = data.likedItems.filter(
      rowItem => rowItem.key !== props.id
    );
  }
}

export function Song(props): Override {
  return {
    paddingLeft: 25,
    onValueChange: value => {
      Favorite(value, props);
    }
  };
}

export function List(): Override {
  return {
    items: data.likedItems
  };
}
