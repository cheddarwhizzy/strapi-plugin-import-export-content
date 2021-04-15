import React, { memo } from "react";
import PropTypes from "prop-types";
import { Label, Select } from "@buffetjs/core";

import FormatIcon from "../FormatIcon";

function DataHeader({
  headersInfo,
  headersOptions,
  headersValues,
  onSelectHeader,
}) {
  return (
    <thead>
      <tr>
        {headersInfo.map(({ fieldName, format }) => (
          <th key={fieldName}>
            <span className="mr-3">{fieldName}</span>
            <FormatIcon format={format} />
          </th>
        ))}
        <th></th>
      </tr>
      <tr>
        {headersInfo.map(({ fieldName }) => (
          <th key={fieldName}>
            <Label htmlFor={`map-${fieldName}`}>
              <Select
                name={`map-${fieldName}`}
                options={headersOptions}
                value={headersValues[fieldName]}
                onChange={onSelectHeader(fieldName)}
                className={
                  headersValues[fieldName] === "none" ? "unselected" : ""
                }
              />
            </Label>
          </th>
        ))}
        <th>Del</th>
      </tr>
    </thead>
  );
}

DataHeader.defaultProps = {
  headers: [],
  headersOptions: [],
  headersValues: {},
  onSelectHeader: () => {},
};

DataHeader.propTypes = {
  headers: PropTypes.array,
  headersOptions: PropTypes.array,
  headersValues: PropTypes.object,
  onSelectHeader: PropTypes.func,
};

export default memo(DataHeader);
