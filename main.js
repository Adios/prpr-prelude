var conf = {
	mode: 'pac_script',
	pacScript: {
		data:	'function FindProxyForURL(url, host) {\n' +
				'  if (shExpMatch(url, "*.*.com/videoplayback*mime=video*"))\n' +
				'    return "PROXY 127.0.0.1:1227";\n' +
				'  return "DIRECT";\n' +
				'}'
	}
};

chrome.proxy.settings.set({ value: conf, scope: 'regular' })
