import React, { FC } from "react";

type Props = React.PropsWithChildren<unknown>;

const ContentSection: FC<Props> = ({ children }: Props) => {
  return <>{children}</>;
};

export default ContentSection;
