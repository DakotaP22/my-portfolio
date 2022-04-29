import { NextPage } from "next"

const LineCountBar: NextPage<{lines: number}> = ({lines}) => {
    const lineElements = Array.from(Array(lines).keys()).map((line) => {
      return (
        <p key={line} className="ml-3 mr-5 text-right text-dark_primary-50">
          {line + 1}
        </p>
      );
    });
    return <div className="flex flex-col">{lineElements}</div>;
}

export default LineCountBar