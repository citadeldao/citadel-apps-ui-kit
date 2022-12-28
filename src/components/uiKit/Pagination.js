import React from 'react';
import classnames from 'classnames';

import '../../assets/styles/uiKit/pagination.scss';

export const Pagination = (props) => {
    const { current, items, limit, siblingCount = 1, className = '', onChange } = props;
    const pages = Math.ceil(items / limit);
    const range = (start, end) => {
        let length = end - start + 1;

        return Array.from({ length }, (_, idx) => idx + start);
    };

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;
    let pagesArr;

    if (totalPageNumbers >= pages) {
        pagesArr = range(1, pages);
    }

    const leftSiblingIndex = Math.max(current - siblingCount, 1);
    const rightSiblingIndex = Math.min(current + siblingCount, pages);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = range(1, leftItemCount);

        pagesArr = [...leftRange, '...', pages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = range(pages - rightItemCount + 1, pages);

        pagesArr = [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);

        pagesArr = [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }

    const getClassName = (isActive = false, isDisabled = false) => {
        return classnames('pagination__item', {
            'pagination__item--active': isActive,
            'pagination__item--disabled': isDisabled,
        });
    };


    return (
        <ul className={`pagination ${className}`}>
            {current !== firstPageIndex &&
                <li
                    className={getClassName(false, current === firstPageIndex)}
                    onClick={() => onChange(current - 1)}
                >
                    &#10094;
                </li>
            }
            {pagesArr.map((page, index) => (
                <li
                    key={`${page}-${index}`}
                    className={getClassName(page === current, page === '...')}
                    onClick={() => (page !== current) && onChange(page)}
                >
                    {page}
                </li>
            ))}
            {current !== lastPageIndex &&
                <li
                    className={getClassName(false, current === lastPageIndex)}
                    onClick={() => onChange(current + 1)}
                >
                    &#10095;
                </li>
            }
        </ul>
    );
};

export default Pagination;