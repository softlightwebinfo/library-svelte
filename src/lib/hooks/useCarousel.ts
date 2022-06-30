import type { ICarouselSlickData } from "$lib/interfaces/ICarouselSlickData";
import { onMount } from "svelte";
import { get, writable } from "svelte/store";

export const useCarousel = (data: ICarouselSlickData[]) => {
    const index = writable(0);
    const indicator = writable({
        columns: 4,
        indicators: 1,
        length: 0,
        active: 1,
    });

    const slider = writable(null);

    onMount(() => updateIndicators(0));

    const onClick = (indexPos) => {
        const widthItem = get(slider).children[0].offsetWidth;
        index.set(get(index) + indexPos);
        get(slider).scrollLeft = widthItem * get(index);
        updateIndicators(get(index));
    }

    const updateIndicators = (index) => {
        const indicators = getIndicators()
        const active = Math.ceil(index / indicators.columns)
        indicator.set({ ...indicators, active });
    }

    const onClickLeft = () => {
        if (get(index) == 0) {
            return;
        }
        onClick(-1)
    };

    const isDisabledNext = () => get(index) >= data.length - 1;
    const isDisabledPrev = () => get(index) == 0;

    const getIndicators = () => {
        const ele = document.querySelector(":root");
        const style = getComputedStyle(ele)
        const columns = Number(style.getPropertyValue("--carousel-slick-item_column"))
        const dataLength = Math.ceil(data.length / columns);
        return { columns, indicators: dataLength, length: data.length };
    }

    const onClickRight = () => {
        if (get(index) >= data.length - 1) {
            return;
        }
        onClick(1)
    };

    const onClickIndicator = (indicatorIndex) => {
        // TODO: onClickArrowIndicators
        // console.log(indicatorIndex)
        // index.set(Math.ceil(indicatorIndex / get(indicator).columns))
    }

    return {
        index,
        slider,
        indicator,
        onClickLeft,
        onClickRight,
        isDisabledPrev,
        isDisabledNext,
        onClickIndicator,
    }
};