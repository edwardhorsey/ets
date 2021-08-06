import { DiscogsResultsReduced } from '../types/types';

export interface DiscogsResultsProps {
  results: DiscogsResultsReduced;
}

export const DiscogsResults = ({
  results,
}: DiscogsResultsProps): JSX.Element => {
  const {
    title,
    coverImage,
    label,
    country,
    year,
    style,
    format,
  } = results;

  return (
    <div className="p-2 sm:px-5 sm:pt-0">
      <h3 className="text-xl md:text-2xl text-center m-1">
        {title}
      </h3>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {coverImage && (
          /* eslint-disable @next/next/no-img-element */
          <div className="w-4/5 md:w-2/4 h-auto">
            <img
              src={coverImage}
              alt={`${title} cover`}
              className="max-h-60 max-w-60 sm:max-h-72 sm:max-w-72
              lg:max-h-96 lg:max-w-96 mx-auto md:ml-auto md:mr-0"
            />
          </div>
        )}
        <div className="flex flex-col pl-5 pt-3 text-sm sm:text-base">
          <p className="m-1">{`Label: ${label}`}</p>
          <p className="m-1">{`Country: ${country}`}</p>
          <p className="m-1">{`Year: ${year}`}</p>
          {style && <p className="m-1">{`Style: ${style.join(' ')}`}</p>}
          {format && <p className="m-1">{`Format: ${format.join(' ')}`}</p>}
        </div>
      </div>
    </div>
  );
};
