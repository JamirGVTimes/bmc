import { Helmet } from "react-helmet";

export default function ReactHelmet({ title, content }) {
  return (
    <Helmet>
      <title>{title} | Bwikya Muslim Community</title>
      <meta name="description" content={content} />
    </Helmet>
  );
}
