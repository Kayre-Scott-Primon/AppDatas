import React, { Component, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/header'
import styles from './styles'
import DeviceInfo from 'react-native-device-info';

function Hardware(){

    const [getAndroidId, setAdnroidId] = useState('')
    const [getApiLevel, setApiLevel]= useState('')
    const [getApplicationName, setApplicationName]= useState('')
    const [getAvailableLocationProviders, setAvailableLocationProviders] = useState('')
    const [getBaseOs, setBaseOs]= useState('')
    const [getBuildId, setBuildId]= useState('')
    const [getBatteryLevel, setBatteryLevel]= useState('')
    const [getBootloader, setBootloader]= useState('')
    const [getCarrier, setCarrier]= useState('')
    const [getCodename, setCodename] = useState('')
    const [getDevice, setDevice] = useState('')
    const [getDisplay, setDisplay] = useState('')
    const [getDeviceName, setDeviceName] = useState('')
    const [getDeviceToken, setDeviceToken] = useState('')
    const [getFirstInstallTime, setFirstInstallTime ] = useState('')
    const [getFingerprint, setFingerprint ] = useState('')
    const [getFontScale, setFontScale ] = useState('')
    const [getFreeDiskStorage, setFreeDiskStorage ] = useState('')
    const [getFreeDiskStorageOld, setFreeDiskStorageOld ] = useState('')
    const [getHardware, setHardware ] = useState('')
    const [getHost, setHost ] = useState('')
    const [getIpAddress, setIpAddress] = useState('')
    const [getInstallerPackageName, setInstallerPackageName ] = useState('')
    const [getInstallReferrer, setInstallReferrer ] = useState('')
    const [getInstanceId, setInstanceId ] = useState('')
    const [getLastUpdateTime, setLastUpdateTime  ] = useState('')
    const [getMacAddress, setMacAddress ] = useState('')
    const [getManufacturer, setManufacturer  ] = useState('')
    const [getMaxMemory, setMaxMemory ] = useState('')
    const [getPhoneNumber, setPhoneNumber ] = useState('')
    const [getPowerState, setPowerState ] = useState('')
    const [getProduct, setProduct ] = useState('')
    const [getPreviewSdkInt, setPreviewSdkInt ] = useState('')
    const [getSerialNumber, setSerialNumber ] = useState('')
    const [getSecurityPatch, setSecurityPatch ] = useState('')
    const [getSystemAvailableFeatures, setSystemAvailableFeatures ] = useState('')
    const [getTags, setTags ] = useState('')
    const [getType, setType ] = useState('')
    const [getTotalDiskCapacity, setTotalDiskCapacity ] = useState('')
    const [getTotalDiskCapacityOld, setTotalDiskCapacityOld ] = useState('')
    const [getTotalMemory, setTotalMemory ] = useState('')
    const [getUsedMemory, setUsedMemory ] = useState('')
    const [getUserAgent, setUserAgent ] = useState('')
    const [getBrand ,setBrand] = useState('')
    const [getBuildNumber ,setBuildNumber] = useState('')
    const [getBundleId ,setBundleId] = useState('')
    const [getDeviceId ,setDeviceId] = useState('')
    const [getDeviceType ,setDeviceType] = useState('')
    const [getIncremental ,setIncremental] = useState('')
    const [getModel ,setModel] = useState('')
    const [getReadableVersion ,setReadableVersion] = useState('')
    const [getSystemName ,setSystemName] = useState('')
    const [getSystemVersion ,setSystemVersion] = useState('')
    const [getUniqueId ,setUniqueId] = useState('')
    const [getVersion ,setVersion] = useState('')


    useEffect(() => {
        DeviceInfo.getAndroidId().then(value => setAdnroidId(value))
        DeviceInfo.getApiLevel().then(value => setApiLevel(value))
        DeviceInfo.getAvailableLocationProviders().then(value => setAvailableLocationProviders(JSON.stringify(value)))
        DeviceInfo.getBaseOs().then(value => setBaseOs(value))
        DeviceInfo.getBuildId().then(value => setBuildId(value))
        DeviceInfo.getBatteryLevel().then(value => setBatteryLevel(value))
        DeviceInfo.getBootloader().then(value => setBootloader(value))
        DeviceInfo.getCarrier().then(value => setCarrier(value))
        DeviceInfo.getCodename().then(value => setCodename(value))
        DeviceInfo.getDevice().then(value => setDevice(value))
        DeviceInfo.getDisplay().then(value => setDisplay(value))
        DeviceInfo.getDeviceName().then(value => setDeviceName(value))
        DeviceInfo.getDeviceToken().then(value => setDeviceToken(value))
        DeviceInfo.getFirstInstallTime().then(value => setFirstInstallTime(value))
        DeviceInfo.getFingerprint().then(value => setFingerprint(value))
        DeviceInfo.getFontScale().then(value => setFontScale(value))
        DeviceInfo.getFreeDiskStorage().then(value => setFreeDiskStorage(value))
        DeviceInfo.getFreeDiskStorageOld().then(value => setFreeDiskStorageOld(value))
        DeviceInfo.getHardware().then(value => setHardware(value))
        DeviceInfo.getHost().then(value => setHost(value))
        DeviceInfo.getIpAddress().then(value => setIpAddress(value))
        DeviceInfo.getInstallerPackageName().then(value => setInstallerPackageName(value))
        DeviceInfo.getInstallReferrer().then(value => setInstallReferrer(value))
        DeviceInfo.getInstanceId().then(value => setInstanceId(value))
        DeviceInfo.getLastUpdateTime().then(value => setLastUpdateTime(value))
        DeviceInfo.getMacAddress().then(value => setMacAddress(value))
        DeviceInfo.getManufacturer().then(value => setManufacturer(value))
        DeviceInfo.getMaxMemory().then(value => setMaxMemory(value))
        DeviceInfo.getPhoneNumber().then(value => setPhoneNumber(value))
        DeviceInfo.getPowerState().then(value => setPowerState(JSON.stringify(value)))
        DeviceInfo.getProduct().then(value => setProduct(value))
        DeviceInfo.getPreviewSdkInt().then(value => setPreviewSdkInt(value))
        DeviceInfo.getSerialNumber().then(value => setSerialNumber(value))
        DeviceInfo.getSecurityPatch().then(value => setSecurityPatch(value))
        DeviceInfo.getSystemAvailableFeatures().then(value => setSystemAvailableFeatures(value))
        DeviceInfo.getTags().then(value => setTags(value))
        DeviceInfo.getType().then(value => setType(value))
        DeviceInfo.getTotalDiskCapacity().then(value => setTotalDiskCapacity(value))
        DeviceInfo.getTotalDiskCapacityOld().then(value => setTotalDiskCapacityOld(value))
        DeviceInfo.getTotalMemory().then(value => setTotalMemory(value))
        DeviceInfo.getUsedMemory().then(value => setUsedMemory(value))
        DeviceInfo.getUserAgent().then(value => setUserAgent(value))    
        setBrand(DeviceInfo.getBrand())
        setBuildNumber(DeviceInfo.getBuildNumber())
        setBundleId(DeviceInfo.getBundleId())
        setDeviceId(DeviceInfo.getDeviceId())
        setDeviceType(DeviceInfo.getDeviceType())
        setIncremental(JSON.stringify(DeviceInfo.getIncremental()))
        setModel(DeviceInfo.getModel())
        setReadableVersion(DeviceInfo.getReadableVersion())
        setSystemName(DeviceInfo.getSystemName())
        setSystemVersion(DeviceInfo.getSystemVersion())
        setUniqueId(DeviceInfo.getUniqueId())
        setApplicationName(DeviceInfo.getApplicationName())
        setVersion(DeviceInfo.getVersion())
    },[])

    return(
        <View style={styles.container}>
            <Header title={'Hardware'} icon={'mobile-alt'}/>
            <ScrollView>
                <View style={styles.card}>
                    <Text style={styles.title}>Device Info</Text>
                    <Text style={styles.subtitle}>Android: {getAndroidId}</Text>
                    <Text style={styles.subtitle}>Api Level: {getApiLevel}</Text>
                    <Text style={styles.subtitle}>Application Name: {getApplicationName}</Text>
                    <Text style={styles.subtitle}>Available Location Providers: {getAvailableLocationProviders}</Text>
                    <Text style={styles.subtitle}>Base OS: {getBaseOs}</Text>
                    <Text style={styles.subtitle}>Build id: {getBuildId}</Text>
                    <Text style={styles.subtitle}>Battery level: {getBatteryLevel}</Text>
                    <Text style={styles.subtitle}>Bootloader: {getBootloader}</Text>
                    <Text style={styles.subtitle}>Brand: {getBrand}</Text>
                    <Text style={styles.subtitle}>Build number: {getBuildNumber}</Text>
                    <Text style={styles.subtitle}>Bundle id: {getBundleId}</Text>
                    <Text style={styles.subtitle}>Carrier: {getCarrier}</Text>
                    <Text style={styles.subtitle}>Codename: {getCodename}</Text>
                    <Text style={styles.subtitle}>Device: {getDevice}</Text>
                    <Text style={styles.subtitle}>Device: {getDeviceId}</Text>
                    <Text style={styles.subtitle}>Device type: {getDeviceType}</Text>
                    <Text style={styles.subtitle}>Display: {getDisplay}</Text>
                    <Text style={styles.subtitle}>Device name: {getDeviceName}</Text>
                    <Text style={styles.subtitle}>Device token: {getDeviceToken}</Text>
                    <Text style={styles.subtitle}>Finish install time: {getFirstInstallTime}</Text>
                    <Text style={styles.subtitle}>Finder print: {getFingerprint}</Text>
                    <Text style={styles.subtitle}>Font scale: {getFontScale}</Text>
                    <Text style={styles.subtitle}>Free disk storage: {getFreeDiskStorage}</Text>
                    <Text style={styles.subtitle}>Free disk storage old: {getFreeDiskStorageOld}</Text>
                    <Text style={styles.subtitle}>Hardware: {getHardware}</Text>
                    <Text style={styles.subtitle}>Host: {getHost}</Text>
                    <Text style={styles.subtitle}>Ip address: {getIpAddress}</Text>
                    <Text style={styles.subtitle}>Incremental: {getIncremental}</Text>
                    <Text style={styles.subtitle}>Installer package name: {getInstallerPackageName}</Text>
                    <Text style={styles.subtitle}>Install referrer: {getInstallReferrer}</Text>
                    <Text style={styles.subtitle}>Instance id: {getInstanceId}</Text>
                    <Text style={styles.subtitle}>Last update time: {getLastUpdateTime}</Text>
                    <Text style={styles.subtitle}>Mac address: {getMacAddress}</Text>
                    <Text style={styles.subtitle}>Manufacturer: {getManufacturer}</Text>
                    <Text style={styles.subtitle}>Max memory: {getMaxMemory}</Text>
                    <Text style={styles.subtitle}>Model: {getModel}</Text>
                    <Text style={styles.subtitle}>Phone number: {getPhoneNumber}</Text>
                    <Text style={styles.subtitle}>Power state: {getPowerState}</Text>
                    <Text style={styles.subtitle}>Product: {getProduct}</Text>
                    <Text style={styles.subtitle}>Preview sdk int: {getPreviewSdkInt}</Text>
                    <Text style={styles.subtitle}>Readable version: {getReadableVersion}</Text>
                    <Text style={styles.subtitle}>Serial number: {getSerialNumber}</Text>
                    <Text style={styles.subtitle}>Security patch: {getSecurityPatch}</Text>
                    <Text style={styles.subtitle}>System available features: {getSystemAvailableFeatures}</Text>
                    <Text style={styles.subtitle}>System name: {getSystemName}</Text>
                    <Text style={styles.subtitle}>System version: {getSystemVersion}</Text>
                    <Text style={styles.subtitle}>Tags: {getTags}</Text>
                    <Text style={styles.subtitle}>Type: {getType}</Text>
                    <Text style={styles.subtitle}>Total disk capacity: {getTotalDiskCapacity}</Text>
                    <Text style={styles.subtitle}>Total disk capacity old: {getTotalDiskCapacityOld}</Text>
                    <Text style={styles.subtitle}>Total memory: {getTotalMemory}</Text>
                    <Text style={styles.subtitle}>Unique id: {getUniqueId}</Text>
                    <Text style={styles.subtitle}>Used memory: {getUsedMemory}</Text>
                    <Text style={styles.subtitle}>User agent: {getUserAgent}</Text>
                <Text style={styles.subtitle}>Version: {getVersion}</Text>
            </View> 
           </ScrollView>
        </View>
    )
}

export default Hardware