function(event, ... ) 
    
    aura_env.barrierName = "Power Word: Shield"    
    if aura_env.config.auraName ~= nil then
        aura_env.barrierName = aura_env.config.auraName
    end
    
    
    if event == "COMBAT_LOG_EVENT_UNFILTERED" then
        local _,subEvent, hideCaster, sourceGUID, sourceName, sourceFlags, sourceRaidFlags, destGUID, destName, destFlags, destRaidFlags = ...
        local spellID,spellName,spellSchool
        local missType = ""
        local amountMissed
        local tem
        
        if subEvent == "SPELL_CAST_SUCCESS" and sourceName == UnitName("player") then           
            spellID,spellName = select(12,...)          
            if spellName == aura_env.barrierName or spellID == 10901 then
                --print("-- Ice Barrier")
                aura_env.absorbAmount = 826
            end
        end
        
        if subEvent == "SPELL_AURA_REMOVED" and sourceName == UnitName("player") then
            spellID,spellName = select(12,...)
            if spellName == aura_env.barrierName or spellID == 10901 then
                aura_env.absorbAmount = 0
            end          
        end
        
        if subEvent == "SWING_MISSED" and destName == UnitName("player")  then
            missType,_,amountMissed = select(12,...) 
            if missType == "ABSORB" then
                if type(amountMissed) == "number" then 
                    aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                    --print("-- SWING_MISSED")
                end           
            end
        elseif subEvent == "SWING_ABSORBED" and destName == UnitName("player") then
            amountMissed = select(12,...)
            if type(amountMissed) == "number" then 
                aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
            end
        elseif subEvent == "SPELL_MISSED" and destName == UnitName("player")  then
            spellID,spellName,spellSchool,missType,_,amountMissed = select(12, ...)
            if missType == "ABSORB" then
                if type(amountMissed) == "number" then 
                    aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                    
                end
            end
        elseif subEvent == "SPELL_ABSORBED" and destName == UnitName("player")  then
            spellID,spellName,spellSchool,amountMissed = select(12, ...)    
            if type(amountMissed) == "number" then 
                aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                
            end
        elseif subEvent == "RANGE_MISSED" and destName == UnitName("player")  then
            spellID,spellName,spellSchool,missType,_,amountMissed = select(12, ...)
            if missType == "ABSORB" then
                if type(amountMissed) == "number" then 
                    aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                    
                end
            end
        elseif subEvent == "RANGE_ABSORBED" and destName == UnitName("player")  then
            spellID,spellName,spellSchool,amountMissed = select(12, ...)    
            if type(amountMissed) == "number" then 
                aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                
            end
        elseif subEvent == "SPELL_PERIODIC_MISSED" and destName == UnitName("player")  then
            spellID,spellName,spellSchool,missType,_,amountMissed = select(12, ...)
            if missType == "ABSORB" then
                if type(amountMissed) == "number" then 
                    aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                end
            end
        elseif subEvent == "SPELL_PERIODIC_ABSORBED" and destName == UnitName("player")  then
            spellID,spellName,spellSchool,amountMissed = select(12, ...)    
            if type(amountMissed) == "number" then 
                aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
            end
        elseif subEvent == "ENVIRONMENTAL_MISSED" and destName == UnitName("player")  then
            missType,_,amountMissed = select(13,...) 
            if missType == "ABSORB" then
                if type(amountMissed) == "number" then 
                    aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
                end           
            end
        elseif subEvent == "ENVIRONMENTAL_ABSORBED" and destName == UnitName("player") then
            amountMissed = select(13,...)
            if type(amountMissed) == "number" then 
                aura_env.absorbAmount = aura_env.absorbAmount - amountMissed
            end
        end
        
    end
    
    if aura_env.absorbAmount <= 0 then
        aura_env.absorbAmount = 0
    end
    if aura_env.absorbAmount >= 0 then
        return true
    end
    
end

