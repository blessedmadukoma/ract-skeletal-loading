import SkeletonElement from "./SkeletonElement";
import "./skeleton.css";

const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type={"title"} />
        <SkeletonElement type={"text"} />
        <SkeletonElement type={"text"} />
        <SkeletonElement type={"text"} />
      </div>
    </div>
  );
};

export default SkeletonArticle;
