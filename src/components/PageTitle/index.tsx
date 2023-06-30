import "./index.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <>
      <h1 className="page-title">{props.title}</h1>
    </>
  );
};

export default PageTitle;
