const Title = ({ title }) => {
  const htmlTitle = document.querySelector("title");
  htmlTitle.innerHTML = title;
};

export default Title;
