export const articleGenerator = (num) => {
  let i = 0;
  const arr = [];
  const title = 'Lorem Ipsum';
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus dolorum maxime voluptatem, ullam officiis est laborum, maiores repellendus iste, explicabo tenetur fugit asperiores consequuntur. Unde, quo mollitia? Iste, fugiat. Sed dolor, repudiandae mollitia accusantium at odit impedit magni iste ducimus et molestias veritatis officia itaque exercitationem enim natus autem explicabo tempora eos minima? Iure veritatis ea quibusdam aperiam rerum!';
  for (i = 0; i <= num - 1; i++) {
    arr.push({ id: i + 1, title, content });
  }
  return arr;
};

export const workspaceGenerator = (num) => {
  let i = 0;
  const arr = [];
  for (i = 0; i <= num - 1; i++) {
    const url = `/workspace00${i + 1}`;
    const icon = `/icons/00${i + 1}`;
    arr.push({ id: i + 1, url, icon });
  }
  return arr;
};
