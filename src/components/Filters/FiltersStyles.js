import styled from "styled-components";

export const ContentFilters = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0;
  .list-of-filters {
    display: flex;
    gap: 20px;

    .filter-by {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      margin: 0 5px 0 0;
    }
    label {
      font-weight: 600;

    }
  }
`