import { useRequest } from "ahooks";

const defaultOptions = {
  manual: true,
  throwOnError: true,
  throttleInterval: 1000,
};

export default function useMyRequest(api, options) {
  return useRequest((param = {}) => param, {
    ...defaultOptions,
    ...options,
    requestMethod: (param) => api(param),
  });
}

// const {
//     data,
//     error,
//     loading,
//     run,
//     params,
//     cancel,
//     refresh,
//     mutate,
//     fetches,
//   } = useRequest(service, {
//     manual,
//     initialData,
//     refreshDeps,
//     onSuccess,
//     onError,
//     formatResult,
//     cacheKey,
//     loadingDelay,
//     defaultParams,
//     pollingInterval,
//     pollingWhenHidden,
//     fetchKey,
//     refreshOnWindowFocus,
//     focusTimespan,
//     debounceInterval,
//     throttleInterval,
//     ready,
//     throwOnError,
//   });
